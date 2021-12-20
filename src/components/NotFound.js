import React, { Component } from "react";

class NotFound extends Component {
    render() {
        return (
            <div class="ui grid middle aligned segment red inverted" >
                <div class="ui column center aligned">
                    <div class="ui inverted statistic">
                        <div class="value">404</div>
                        <div class="label">Error</div>
                    </div>

                    <div class="ui message red inverted">
                        <div class="header">Description</div>
                        <p>Not found</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default NotFound