// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import dialog from '../../shared/generated/dialog.module'
import keyframes from '../../shared/generated/keyframes.module'

export default {
  baseAlertDialogSection: {
    ...dialog.pandoDialogSection,
  },
  baseAlertAnimation: {
    ...keyframes.pandoFadeIn,
  },
  alertDialogBackdrop: {
    ...dialog.pandoDialogBackdrop,
  },
  alertDialogFooter: {
    ...dialog.pandoDialogBtnGroup,
  },
  alertFocusGuard: {
    ...dialog.pandoFocusGuard,
  },
  alertDialogHeader: {
    ...dialog.pandoDialogHeader,
    marginTop: '2rem',
  },
  alertDialogLabel: {
    display: 'block',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    marginTop: '1.2rem',
  },
  alertDialogInputWrapper: {
    marginTop: '1rem',
  },
  alertDialogSection: {
    ...keyframes.pandoFadeIn,
    ...dialog.pandoDialogSection,
  },
  alertDialogTitleIcon: {
    ...dialog.pandoDialogTitleIcon,
  },
  alertDialogWrapper: {
    ...dialog.pandoDialogWrapper,
  },
} satisfies GeneratedStyles