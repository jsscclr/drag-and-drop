const SIZE_THIRD = "calc(33% - var(--gap))"
const SIZE_HALF = "calc(50% - var(--gap))"
const SIZE_FULL = "100%"
const POSITION_HALF = "calc(50% + var(--gap))"
const POSITION_THIRD = "calc(33% + var(--gap) * 1.5)"
const POSITION_TWO_THIRDS = "calc(66% + var(--gap) * 3)"

export const getStyle = (index, numberOfItems) => {
  switch (numberOfItems) {
    case 1: {
      return {
        "--height": SIZE_FULL,
        "--width": SIZE_FULL,
        "--top": "0",
        "--left": "0",
      }
    }
    case 2: {
      return {
        "--height": SIZE_FULL,
        "--width": SIZE_HALF,
        "--top": "0",
        "--left": index === 0 ? "0" : POSITION_HALF,
      }
    }
    case 3: {
      return {
        "--height": SIZE_HALF,
        "--width": index === 2 ? SIZE_FULL : SIZE_HALF,
        "--top": index === 2 ? POSITION_HALF : "0",
        "--left": index === 1 ? POSITION_HALF : "0",
      }
    }
    case 4: {
      return {
        "--height": SIZE_HALF,
        "--width": SIZE_HALF,
        "--top": index < 2 ? "0" : POSITION_HALF,
        "--left": index % 2 === 0 ? "0" : POSITION_HALF,
      }
    }
    case 5: {
      return {
        "--height": SIZE_HALF,
        "--width": index < 2 ? SIZE_HALF : SIZE_THIRD,
        "--top": index < 2 ? "0" : POSITION_HALF,
        "--left":
          index === 0 || index === 2
            ? "0"
            : index === 1
              ? POSITION_HALF
              : index === 3
                ? POSITION_THIRD
                : POSITION_TWO_THIRDS,
      }
    }
  }
}
