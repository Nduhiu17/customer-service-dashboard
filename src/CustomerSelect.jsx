import React, { Component } from 'react'

export default class CustomerType extends Component {
  render() {
    return (
      <div>
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">one</a>
                <a class="dropdown-item" href="#">Two</a>
                <a class="dropdown-item" href="#">Three</a>
            </div>
        </div>
      </div>
    )
  }
}
