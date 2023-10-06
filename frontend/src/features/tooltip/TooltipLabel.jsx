import style from './TooltipLabel.module.css';
import useTooltipLabel from './useTooltipLabel';

/**
 * Tooltip box, containing the text
 */
export default function TooltipLabel() {
    const {
        ref,
        value,
        open,
        position: {
            top,
            left,
        },
        labelEventHandlers,
    } = useTooltipLabel();

    if (open) {
        return <div
            className={`${style.tooltip}`}
            role="tooltip"
            aria-hidden={true}
            ref={ref}
            style={{
                '--tooltip-top': `${top}px`,
                '--tooltip-left': `${left}px`,
            }}
            {...labelEventHandlers}
        >{value}</div>;
    }

    return;
}