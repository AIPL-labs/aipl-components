import { ButtonHTMLAttributes } from 'react';
import { AiplComponentContextState } from '../type/AiplComponentContextState';
export declare const AiplSelect: (props: ButtonHTMLAttributes<HTMLSelectElement> & {
    onChangeValue?: (value: string, contextState: AiplComponentContextState, aiplName: string) => void;
    defaultValue?: string;
    values?: Record<string, string> | string[];
    aiplName: string;
    formatter?: (value: string) => string;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AiplSelect.d.ts.map