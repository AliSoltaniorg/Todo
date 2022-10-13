import React, { FC, PropsWithChildren } from 'react';
import { Badge } from 'react-bootstrap';

const CornerBadge: FC<
    PropsWithChildren<{ bg?: string; className?: string }>
> = (props) => {
    return (
        <Badge
            bg={props.bg || 'primary'}
            className={`position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle ${props.className}`}
        >
            {props.children || (
                <span className="visually-hidden">New alerts</span>
            )}
        </Badge>
    );
};

export default CornerBadge;
