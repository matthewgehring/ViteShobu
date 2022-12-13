//component from different game used to show type setting

import { useState, useEffect } from 'react'
import '../App.css'

type CardProps = {
    word: string,
    css: boolean
}

function Card({css, word}: CardProps) {

  return (
    <div className={`Card${css ? ' spy' : ''}`}>
        {word}
    </div>
  )
}

export default Card
