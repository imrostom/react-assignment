import { useEffect, useState } from "react";
import { platforms } from "../utils/config"
import client from "../utils/client";

function News() {
    // State for filters
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [source, setSource] = useState('');

    // State for news data and pagination
    const [filteredNews, setFilteredNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Filter and paginate the news
    useEffect(() => {
        fetchNews();
    }, [selectedPlatform, searchQuery, source, currentPage]);


    const [sources, setSources] = useState([]);
    useEffect(() => {
        fetchSources();
    }, []);

    const fetchSources = async () => {
        try {
            const { data: { data: { news } } } = await client.get('/sources');

            console.log({ news });

            setSources(news);
        } catch (error) {
            console.error('Error fetching filtered news:', error);
        }
    }


    // Function to filter and paginate news
    const fetchNews = async () => {
        try {
            const { data: { data: { news } } } = await client.get('/news', {
                params: {
                    platform: selectedPlatform,
                    search: searchQuery,
                    source: source,
                    page: currentPage,
                },
            });

            setFilteredNews(news.data);
            setTotalPages(news.last_page);
        } catch (error) {
            console.error('Error fetching filtered news:', error);
        }
    }

    // Handle platform selection
    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
        setCurrentPage(1); // Reset to first page after filter change
    }

    // Handle source change 
    const handleSourceChange = (e) => {
        setSource(e.target.value);
        setCurrentPage(1); // Reset to first page after filter change
    }

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page after filter change
    }

    // Handle pagination (next and previous)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Handle search (next and previous)
    const handleSearchResult = () => {
        setCurrentPage(1);
    }

    return <main className="app-main">
        <div className="app-content py-3">
            <div className="container-fluid">
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <h2 className="text-center">Search News</h2>
                            <hr />
                        </div>
                    </section>

                    <section className="content py-3">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="form-group">
                                                <label className="form-label">Platform</label>
                                                <select className="form-select" value={selectedPlatform} onChange={handlePlatformChange}>
                                                    <option value=''>Please select</option>
                                                    {platforms.map((platform) => {
                                                        return <option key={platform.id} value={platform.id}>{platform.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="form-group">
                                                <label className="form-label">Source</label>
                                                <select className="form-select" value={source} onChange={handleSourceChange}>
                                                    <option value=''>Please select</option>
                                                    {sources.map((sourceItem, index) => {
                                                        return <option key={index} value={sourceItem}>{sourceItem}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label className="form-label">Search</label>
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="Type your keywords here"
                                                    value={searchQuery}
                                                    onChange={handleSearchChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="form-label">&nbsp;</label>
                                                <input
                                                    type="submit"
                                                    className="form-control btn btn-primary"
                                                    value="Search Result"
                                                    onClick={handleSearchResult}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-10 offset-md-1">
                                    <div className="list-group">

                                        {filteredNews.length > 0 ? (
                                            filteredNews.map((newsItem, index) => (
                                                <div className="list-group-item" key={index}>
                                                    <div className="row">
                                                        <div className="col-auto">
                                                            <img className="img-thumbnail" src={newsItem.image ? newsItem.image : 'https://placehold.co/600x400/000000/FFF'} alt="Photo" style={{ width: '250px', height: '200px' }} />
                                                        </div>
                                                        <div className="col px-4">
                                                            <div>
                                                                <span className="badge bg-dark" title="Platform">{newsItem.platform}</span>
                                                                <div className="float-right">{newsItem.published_at}</div>
                                                                <h3>{newsItem.title}</h3>
                                                                <p className="mb-2">{newsItem.content}</p>
                                                                <a href={newsItem.url} className="btn btn-secondary btn-sm" target="_blank">Read more...</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="mb-0 text-danger">News result not found. Please reset filter.</p>
                                                </div>
                                            </div>
                                        )}

                                        {totalPages > 1 && (
                                            <nav aria-label="Page navigation">
                                                <ul className="pagination justify-content-center mt-4">
                                                    {Array.from({ length: totalPages }, (_, index) => (
                                                        <li
                                                            key={index + 1}
                                                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                                        >
                                                            <button
                                                                className="page-link"
                                                                onClick={() => handlePageChange(index + 1)}
                                                            >
                                                                {index + 1}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    </main >
}

export default News