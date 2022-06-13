import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const { paginate, nextPage, prevPage, totalPage } = this.props;

        const pageNumbers = [];
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(i);
        }
        console.log(pageNumbers)
        
        return (
            <div>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                    {/* eslint-disable-next-line */}
                        <a className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                    {/* eslint-disable-next-line */}
                            <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                    {/* eslint-disable-next-line */}
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination