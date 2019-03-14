import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends Component {
  static contextType = LanguageContext

  render() {
    return (
      <div>
        <div>
          Select a language: <span> </span>
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.context.onLanguageChange('dutch')}
          />
        </div>
      </div>
    )
  }
}
export default LanguageSelector
