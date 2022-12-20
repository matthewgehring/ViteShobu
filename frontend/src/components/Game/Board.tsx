import { useState } from 'react';
import Region from './Region';
import {boardInit} from '../../constants/boardInit'

const Board = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5 bg-brown">
        <Region />
        <Region />
        <Region />
        <Region />
    </div>
  );
};

export default Board;