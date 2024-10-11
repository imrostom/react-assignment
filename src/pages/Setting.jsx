import { Link } from "react-router-dom"
import { platforms } from "../utils/config"

function Setting() {
    return (
        <main className="app-main">
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="mb-0">Setting</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-end">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Setting
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-content">
                <div className="container-fluid">
                    <div className="card card-secondary">
                        <div className="card-header">
                            <h3 className="card-title">News Preference</h3>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group mb-3">
                                        <label className="mb-1">Platform</label>
                                        <select className="form-select">
                                            <option>Please select</option>
                                            {platforms.map((platform) => {
                                                return <option key={platform.id} value={platform.id}>{platform.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Source</label>
                                        <select multiple className="form-select">
                                            <option>option 1</option>
                                            <option>option 2</option>
                                            <option>option 3</option>
                                            <option>option 4</option>
                                            <option>option 5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}


export default Setting