import style from './TooltipLabel.module.css';
import useTooltipLabel from './useTooltipLabel';

/**
 * Tooltip box, containing the text
 */
export default function TooltipLabel() {
    const {
        open,
        value,
        ref,
        top,
        left,
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
        >{value}</div>;
    }

    return;
}