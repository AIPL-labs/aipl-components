import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AiplComponentContextState } from '../type/AiplComponentContextState';
export declare const AiplRadioGroup: (props: ButtonHTMLAttributes<HTMLFieldSetElement> & {
    defaultValue?: string;
    values?: Record<string, string> | string[];
    aiplName: string;
    formatter?: (value: string) => ReactNode;
    onChangeValue?: (value: string, contextState: AiplComponentContextState, aiplName: string) => void;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AiplRadioGroup.d.ts.map