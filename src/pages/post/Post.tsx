import React, { FC, useState } from 'react'

import { PostView } from './Post.view'

interface IPostProps {}

export const Post: FC<IPostProps> = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModal = () => setModalOpen(!modalOpen)

  return <PostView handleModal={handleModal} modalOpen={modalOpen} />
}
