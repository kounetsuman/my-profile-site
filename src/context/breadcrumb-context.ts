import React from 'react';
import { BreadcrumbItem } from '~/components/breadcrumb';

interface BreadcrumbContext {
    setBreadcrumbItems: (items: BreadcrumbItem[]) => void;
}

export const BreadcrumbContext = React.createContext({} as BreadcrumbContext);
