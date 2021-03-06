import React, { Component } from 'react'
import './Input.css'

import cx from 'classnames'
import { Input as ValueLinkInput } from 'valuelink/tags'


export default class Input extends Component {
  render () {
    const {
      inputContainerClassName, inputClassName,
      valueLink: { error }, valueLink,
      focusOnInit, disabled, readOnly, type, placeholder, pattern
    } = this.props

    const inputContainerStyleName = cx('inputContainer', {
      'withError': error,
    })

    return (
      <div className="root" >
        <div className={`${inputContainerStyleName} ${inputContainerClassName}`}>
          {
            React.createElement(ValueLinkInput, {
              className: 'input ' + inputClassName,
              valueLink,
              placeholder,
              type,
              pattern,
              disabled: disabled || readOnly,
              autoFocus: !!focusOnInit,
              dir: 'auto',
              autoComplete: 'off',
            })
          }
        </div>
        {
          Boolean(error) && (
            <div className="error">
              {error}
            </div>
          )
        }
      </div>
    )
  }
}
