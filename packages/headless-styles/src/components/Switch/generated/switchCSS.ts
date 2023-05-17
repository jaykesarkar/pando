// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'

export default {
  pando_mSwitchTrack: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    alignItems: 'center',
    border: '1px solid var(--ps-action-border)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'flex-end',
    transitionDuration: '150ms',
    transitionProperty: 'background, border-color, transform',
    '&:hover:not([disabled], [data-readonly=true])[data-checked=true]': {
      background: 'var(--ps-action-background-hover)',
      borderColor: 'var(--ps-action-background-hover)',
    },
    '&:hover:not([disabled], [data-readonly=true])[data-invalid=true][data-checked=true]':
      {
        background: 'var(--ps-danger-background-hover)',
        borderColor: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover > .pando_sSwitchThumb': {
      background: 'var(--ps-action-text-inverse)',
    },
    '&:not([disabled], [data-readonly=true]):hover > .pando_mSwitchThumb': {
      background: 'var(--ps-action-text-inverse)',
    },
    '&:not([disabled], [data-readonly=true]):hover[data-checked=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-action-text)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-checked=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-action-text)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true][data-checked=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true][data-checked=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    height: '1.625rem',
    width: '3.125rem',
    padding: '3px',
  },
  pando_sSwitchTrack: {
    '&:is([aria-disabled=true], :disabled, [disabled], [data-readonly=true])': {
      cursor: 'not-allowed',
    },
    alignItems: 'center',
    border: '1px solid var(--ps-action-border)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'flex-end',
    transitionDuration: '150ms',
    transitionProperty: 'background, border-color, transform',
    '&:hover:not([disabled], [data-readonly=true])[data-checked=true]': {
      background: 'var(--ps-action-background-hover)',
      borderColor: 'var(--ps-action-background-hover)',
    },
    '&:hover:not([disabled], [data-readonly=true])[data-invalid=true][data-checked=true]':
      {
        background: 'var(--ps-danger-background-hover)',
        borderColor: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover > .pando_sSwitchThumb': {
      background: 'var(--ps-action-text-inverse)',
    },
    '&:not([disabled], [data-readonly=true]):hover > .pando_mSwitchThumb': {
      background: 'var(--ps-action-text-inverse)',
    },
    '&:not([disabled], [data-readonly=true]):hover[data-checked=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-action-text)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-checked=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-action-text)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-danger-background-hover)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true][data-checked=true] > .pando_sSwitchThumb':
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    '&:not([disabled], [data-readonly=true]):hover[data-invalid=true][data-checked=true] > .pando_mSwitchThumb':
      {
        background: 'var(--ps-danger-text-inverse)',
      },
    height: '1.125rem',
    width: '2.125rem',
    padding: '2px',
  },
  pando_switchWrapper: {
    alignItems: 'center',
    display: 'flex',
    gap: '0.875rem',
  },
  pando_switchContainer: {
    display: 'inline-block',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'middle',
  },
  pando_switchInput: {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .pando_sSwitchTrack': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus + .pando_mSwitchTrack': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible) + .pando_sSwitchTrack': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:focus:not(:focus-visible) + .pando_mSwitchTrack': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  pando_sSwitchThumb: {
    background: 'var(--ps-action-text-weak)',
    borderRadius: 'inherit',
    transitionDuration: '200ms',
    transitionProperty: 'transform, background',
    transform: 'translateX(-1rem) scale(0.6667)',
    height: '0.75rem',
    width: '0.75rem',
  },
  pando_mSwitchThumb: {
    background: 'var(--ps-action-text-weak)',
    borderRadius: 'inherit',
    transitionDuration: '200ms',
    transitionProperty: 'transform, background',
    transform: 'translateX(-1.4375rem) scale(0.6667)',
    height: '1.125rem',
    width: '1.125rem',
  },
  data_checked_true__pando_sSwitchThumb: {
    background: 'var(--ps-action-text)',
    transform: 'translateX(0) scale(1)',
  },
  data_checked_true__pando_mSwitchThumb: {
    background: 'var(--ps-action-text)',
    transform: 'translateX(0) scale(1)',
  },
  data_invalid_true__pando_sSwitchThumb: {
    background: 'var(--ps-danger-background)',
  },
  data_invalid_true__pando_mSwitchThumb: {
    background: 'var(--ps-danger-background)',
  },
  data_invalid_true__data_checked_true__pando_sSwitchThumb: {
    background: 'var(--ps-danger-text-inverse)',
  },
  data_invalid_true__data_checked_true__pando_mSwitchThumb: {
    background: 'var(--ps-danger-text-inverse)',
  },
  data_checked_true__pando_sSwitchTrack: {
    background: 'var(--ps-action-background)',
    borderColor: 'var(--ps-action-background)',
  },
  data_checked_true__pando_mSwitchTrack: {
    background: 'var(--ps-action-background)',
    borderColor: 'var(--ps-action-background)',
  },
  data_invalid_true__pando_sSwitchTrack: {
    borderColor: 'var(--ps-danger-border)',
  },
  data_invalid_true__pando_mSwitchTrack: {
    borderColor: 'var(--ps-danger-border)',
  },
  data_invalid_true__data_checked_true__pando_sSwitchTrack: {
    background: 'var(--ps-danger-background)',
    borderColor: 'var(--ps-danger-background)',
  },
  data_invalid_true__data_checked_true__pando_mSwitchTrack: {
    background: 'var(--ps-danger-background)',
    borderColor: 'var(--ps-danger-background)',
  },
} satisfies GeneratedStyles