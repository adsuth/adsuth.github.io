const COLORS = [
  "#ff6262",
  "#0add62",
  "#2cceff",
  "#ff62dd",
  "#ff951c",
  "#9e22cf",
  "#000127",
  "#c40960",
]

export function selectRandomColor(current=null)
{
  let color
  do
    color = ( COLORS[ Math.floor( Math.random() * COLORS.length ) ] )
  while ( color === current )
  
  return color
}