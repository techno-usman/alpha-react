import React from 'react'
import Classes from '../scss/blog/TagsBlock.module.scss'

const TagsBlock = () => {
  const tags = [
    {
      tagName: 'Art',
    },
    {
      tagName: 'Fun',
    },
    {
      tagName: 'Awars',
    },
    {
      tagName: 'Team',
    },
    {
      tagName: 'Players',
    },
    {
      tagName: 'Updates',
    },
  ]
  return (
    <div className={`${Classes.tagsBlockWrapper}`}>
      <h1 className={`${Classes.blockTitle} my-3`}>TAGS</h1>
      <div className={`${Classes.tagsWrapper} d-flex gap-2 flex-wrap`}>
        {tags.map((item, index) => (
          <div
            className={`${Classes.tag} px-3 d-flex align-items-center justify-content-center`}
            key={index}
          >
            <span>{item.tagName}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TagsBlock
