


export default function layout({children, modal} : {children: React.ReactNode, modal: React.ReactNode}) {
    return(
        <main>
            <header>
                My Gallery
            </header>
            {children}
            <div>
                {modal}
            </div>
        </main>
    )
};
