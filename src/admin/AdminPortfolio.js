import React, { Component } from 'react'

import config, { storage } from '../firebaseConfig'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSaving: false
        }

        this.savePortfolio = this.savePortfolio.bind(this)
    }

    savePortfolio(e) {
        let itemPortfolio={
            title: this.title.value,
            desc: this.desc.value,
            img: this.img
        }
        this.setState({ isSaving: true })
        const archive = itemPortfolio.img.files[0]
        const { name, size, type } = archive

        const ref = storage.ref(name)
        ref.put(archive)
            .then(image => {
                image.ref.getDownloadURL()
                    .then(downloadURL => {
                        const newPortfolio = {
                            title: itemPortfolio.title,
                            desc: itemPortfolio.desc,
                            img: downloadURL
                        }
                        config.push('portfolio', {
                            data: newPortfolio
                        })
                        this.setState({ isSaving: false })
                    })
            })

        e.preventDefault()
    }

    render() {
        if (this.state.isSaving) {
            return (
                <div className="container">
                    <p><span className="glyphicon glyphicon-refresh" />Wait...</p>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <h2>Portfolio - Admin Area</h2>
                    <form onSubmit={this.savePortfolio}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" aria-describedby="Title" ref={ref => this.title = ref} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <textarea className="form-control" id="desc" rows="3" ref={ref => this.desc = ref}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img" className="form-label">Insert image</label>
                            <input className="form-control-file" type="file" id="img" ref={ref => this.img = ref} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            )
        }
    }
}

export default AdminPortfolio