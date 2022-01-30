import styled from "styled-components"

export const Icon = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border: 4px solid white;
  border-radius: 50% 50% 50% 50%;

  padding: 5px;
  margin-top: 4px;
  text-align: center;

  &.p-token {
    height: var(--cac-zone-size);
    font-size: var(--corpse-size);
    line-height: var(--cac-zone-size);
    width: var(--cac-zone-size);
  }
  .weapon {
    position: absolute;
    bottom: calc(var(--cac-zone-size) / 4);
    height: var(--weapon-size);
    width: var(--weapon-size);
    right: calc(var(--cac-zone-size) / 4);
  }
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &.v-token {
    font-size: var(--vehicle-size);

    &.small {
      font-size: calc(var(--vehicle-size) / 2);
    }
    &.big {
      font-size: calc(var(--vehicle-size) * 2);
    }
  }

  &.p-token {
    height: var(--corpse-size);
    width: var(--corpse-size);
    font-size: var(--corpse-size);
    line-height: var(--corpse-size);
  }

  &.indicator-token {
    font-size: calc(var(--token-size) * 0.5);

    &.size-1 {
      font-size: var(--token-size);
    }
    &.size-2 {
      font-size: calc(var(--token-size) * 1.5);
    }
    &.size-3 {
      font-size: calc(var(--token-size) * 2);
    }
    &.size-4 {
      font-size: calc(var(--token-size) * 2.5);
    }
    &.size-5 {
      font-size: calc(var(--token-size) * 3);
    }
    &.size-6 {
      font-size: calc(var(--token-size) * 3.5);
    }
    &.size-7 {
      font-size: calc(var(--token-size) * 4);
    }
    &.size-8 {
      font-size: calc(var(--token-size) * 4.5);
    }
    &.size-9 {
      font-size: calc(var(--token-size) * 5);
    }
    &.size-10 {
      font-size: calc(var(--token-size) * 5.5);
    }
    &.size-11 {
      font-size: calc(var(--token-size) * 6);
    }
    &.size-12 {
      font-size: calc(var(--token-size) * 6.5);
    }
    &.size-13{
      font-size: calc(var(--token-size) * 7);
    }
    &.size-14 {
      font-size: calc(var(--token-size) * 7.5);
    }
    &.size-15 {
      font-size: calc(var(--token-size) * 8);
    }
  }
`
