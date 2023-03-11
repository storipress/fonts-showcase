import '@storipress/fonts/fonts.css'

import { fontList } from '@storipress/fonts/font-list'
import { Fragment, useState } from 'react'

function readQuery() {
  const params = new URLSearchParams(window.location.search)
  return params.get('category')
}

export function FontPreview() {
  const [text, setText] = useState('Hello world')
  const filter = readQuery()

  return (
    <>
      <label
        style={{
          position: 'sticky',
          background: 'white',
          top: '0',
          display: 'block',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        Preview Text:
        <input
          style={{ marginLeft: '1rem', border: 'blue 1px solid', paddingLeft: '0.5rem' }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fontList).map((category) =>
            filter == null || category.toLowerCase() === filter ? (
              <Fragment key={category}>
                {!filter ? (
                  <tr>
                    <th colSpan={2}>{category}</th>
                  </tr>
                ) : null}
                {fontList[category].map((name) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td style={{ fontFamily: `'${name}'`, fontSize: '2rem' }}>{text || 'Hello world'}</td>
                  </tr>
                ))}
              </Fragment>
            ) : null
          )}
        </tbody>
      </table>
    </>
  )
}
