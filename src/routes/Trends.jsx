import React from 'react'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
        return (
            <div>
                {this.context.router.getCurrentParams()}
            </div>
        )
    }
})
