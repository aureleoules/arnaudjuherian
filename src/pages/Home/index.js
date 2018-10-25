import React from 'preact';
import client from 'services/client';

import HomePhoto from 'components/HomePhoto';

import {getSize} from 'utils';

import './styles.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentWillMount() {
        console.log(this.props);
        client.get("/rows").then(response => {
            const rows = response.data.payload;
            this.setState({
                rows
            });
        }).catch(err => {
            if(err) throw err;
        });
    }

    renderRows = () => {
        const displayableRows = this.state.rows.map((row, i) => {
            if(row.photos) {
                return (
                    <div className={["home-row", i === 0 ? "first" : "", "home-row-"+row.photos.length].join(" ")}>
                        {row.photos.map((photo, j) => {
                            const delay = Math.random() * 200   ;
                            return (
                                <HomePhoto mode={photo.height > photo.width ? "vertical" : "horizontal"} delay={delay} id={photo.id} firstRow={i !== 0} size={getSize(photo.size)} key={i} src={photo.url}/>
                            )
                        })
                        }
                    </div>
                )
            }
            return null;
        });
        return displayableRows;
    }

    render() {
        console.log("render");
        return (
            <div className="page">
                <div className="rows-container">
                    {this.renderRows()}
                </div>
            </div>
        )
    }
}

export default Home;