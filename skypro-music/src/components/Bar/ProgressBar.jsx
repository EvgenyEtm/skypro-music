import { styled } from 'styled-components'

export const StyledProgressInput = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? '#b672ff'};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`

const ProgressTime = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 10px;
`

export default function ProgressBar({ timeProgress, duration, audioRef }) {
  return (
    <>
      <ProgressTime>
        {Math.floor(timeProgress / 60) < 10
          ? `0${Math.floor(timeProgress / 60)}`
          : Math.floor(timeProgress / 60)}{' '}
        :
        {Math.floor(timeProgress % 60) < 9
          ? `0${Math.floor(timeProgress % 60)}`
          : Math.floor(timeProgress % 60)}{' '}
        /{' '}
        {Math.floor(duration / 60) < 10
          ? `0${Math.floor(duration / 60)}`
          : Math.floor(duration / 60)}{' '}
        :
        {Math.floor(duration % 60) < 9
          ? `0${Math.floor(duration % 60)}`
          : Math.floor(duration % 60)}
      </ProgressTime>
      <StyledProgressInput
        onChange={(elem) => {
          audioRef.current.currentTime = elem.target.value
        }}
        type="range"
        min={0}
        max={duration}
        value={timeProgress}
        step={0.01}
        $color="#b672ff"
      />
      {/* <div>{timeProgress}</div> */}
    </>
  )
}
