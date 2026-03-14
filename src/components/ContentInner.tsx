export default function ContentInner({children} : {children: React.ReactNode}){
    return(
        <div className="content-outer">
            <div className="content-inner">
                {children}
            </div>
        </div>
    )
}