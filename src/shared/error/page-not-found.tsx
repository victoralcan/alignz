import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center">
                        <img src="/content/assets/images/maintenance/404.png" alt="" className="img-fluid" />
                        <h5 className="text-muted mb-4">
                            <span>Essa página não existe</span>
                        </h5>
                        <Link to="/" className="btn btn-danger mb-4">
                            <span>Recarregar</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;
