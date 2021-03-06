import React from "react";
import MediaItem from "./MediaItem";

const getMediaItems = items => {
  const [visibleItems, hiddenItemsCount] = splitVisibleItems(items);

  const toMediaItem = ([id, item], index, items) => {
    const isLastItem = index === items.length - 1;
    return (
      <MediaItem
        key={id}
        {...{ item, isLastItem, hiddenItemsCount }}
      ></MediaItem>
    );
  };

  return visibleItems.map(toMediaItem);
};

const splitVisibleItems = items => {
  const visibleItems = items.slice(0, 4);
  const hiddenItemsCount = items.slice(4).length;
  return [visibleItems, hiddenItemsCount];
};

const MediaItems = ({ items }) => {
  const mediaItems = getMediaItems(items);
  const hasMultipleItems = items.length >= 3;
  const hasTwoItems = items.length === 2;

  const classNames = [
    hasTwoItems ? "splitted-mediafiles" : false,
    hasMultipleItems ? "multiple-items" : false
  ]
    .filter(Boolean)
    .join(" ");

  return <ul className={classNames}>{mediaItems}</ul>;
};

export default MediaItems;
