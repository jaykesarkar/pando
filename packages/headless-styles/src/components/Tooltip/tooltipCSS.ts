import { tooltip } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import {
  createTooltipProps,
  getDefaultTooltipOptions,
  getTooltipClasses,
} from './shared'
import styles from './tooltipCSS.module.css'
import type { TooltipOptions } from './types'

const TOOLTIP = 'ps-tooltip'

export function getTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const tech = defaultOptions.tech
  const props = createTooltipProps(defaultOptions)
  const { positionClass } = getTooltipClasses(defaultOptions.position)

  if (!tooltip) {
    return null
  }

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP}-wrapper tooltipWrapper`,
        defaultClass: `${TOOLTIP}-wrapper ${styles.tooltipWrapper}`,
      }),
    },
    tooltip: {
      ...props.tooltip,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP} tooltip`,
        defaultClass: `${TOOLTIP} ${styles.tooltip} ${styles[positionClass]}`,
      }),
    },
    trigger: {
      ...props.trigger,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP}-trigger tooltipTrigger`,
        defaultClass: `${TOOLTIP}-trigger ${styles.tooltipTrigger}`,
      }),
    },
  }
}