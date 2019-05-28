import React, { Component } from 'react'
import DocumentMeta from 'react-document-meta';

export default class Default extends Component {
  render() {
    const meta = {
      title: 'Сторінка не знайдена',
      description: '',
      canonical: '',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
      <div>
       Error!!!
      </div>
      </DocumentMeta>
    )
  }
}
