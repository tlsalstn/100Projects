import React, { useCallback, useState } from 'react';
import { GamePageLayout, Items } from './GamePage.layout';
import ItemBox from '../components/ItemBox';

import IconApple from '/icons/apple.png';
import IconBread from '/icons/bread.png';
import IconCake from '/icons/cake.png';
import IconCheese from '/icons/cheese.png';
import IconHamburger from '/icons/hamburger.png';
import IconKebab from '/icons/kebab.png';
import IconPizza from '/icons/pizza.png';
import IconPorridge from '/icons/porridge.png';
import IconPrawn from '/icons/prawn.png';
import IconSteak from '/icons/steak.png';
import IconWatermelon from '/icons/watermelon.png';

const ITEMS = [
  {
    id: 'Apple',
    label: 'Apple',
    source: IconApple,
  },
  {
    id: 'Bread',
    label: 'Bread',
    source: IconBread,
  },
  {
    id: 'Cake',
    label: 'Cake',
    source: IconCake,
  },
  {
    id: 'Cheese',
    label: 'Cheese',
    source: IconCheese,
  },
  {
    id: 'Hamburger',
    label: 'Hamburger',
    source: IconHamburger,
  },
  {
    id: 'Kebab',
    label: 'Kebab',
    source: IconKebab,
  },
  {
    id: 'Pizza',
    label: 'Pizza',
    source: IconPizza,
  },
  {
    id: 'Porridge',
    label: 'Porridge',
    source: IconPorridge,
  },
  {
    id: 'Prawn',
    label: 'Prawn',
    source: IconPrawn,
  },
  {
    id: 'Steak',
    label: 'Steak',
    source: IconSteak,
  },
  {
    id: 'Watermelon',
    label: 'Watermelon',
    source: IconWatermelon,
  },
];

function GamePage() {
  const [items, setItems] = useState<string[]>([]);

  const clickItem = useCallback((id: string) => {
    const idx = items.indexOf(id);
    if (idx === -1) {
      setItems((prev) => [...prev, id]);
      return;
    }

    setItems((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  }, []);

  return (
    <GamePageLayout>
      <Items>
        {ITEMS.map((item) => <ItemBox src={item.source} label={item.label} active={items.includes(item.id)} onClick={() => clickItem(item.id)} />)}
      </Items>
    </GamePageLayout>
  )
}

export default GamePage
