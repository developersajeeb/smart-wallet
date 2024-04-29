import { ThemeProvider } from 'next-themes';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme='light' enableSystem>{children}</ThemeProvider>
    );
};

export default Providers;