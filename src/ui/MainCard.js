import CenteredLayout from "../layout/CenteredLayout"

function MainCard({ className, children }) {
    return (
        <CenteredLayout>
            <div className={`card ${className}`}>
                {children}
            </div>
        </CenteredLayout>
    )
}

export default MainCard
