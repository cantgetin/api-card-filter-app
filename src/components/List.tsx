import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div className="flex flex-wrap gap-2 w-2/3 mx-auto justify-center align-middle py-5">
            {props.items.map(props.renderItem)}
        </div>
    )
}