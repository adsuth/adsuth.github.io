const COLORS = [
  "#ff6262",
  "#0eb654",
  "#2cceff",
  "#ff62dd",
  "#a01f25",
  "#ff951c",
  "#9e22cf",
]

export function selectRandomColor(current=null)
{
  let color
  do
    color = ( COLORS[ Math.floor( Math.random() * COLORS.length ) ] )
  while ( color === current )
  
  return color
}