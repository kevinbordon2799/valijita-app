import valijitaAppLogo from "../../assets/valijita-app-logo.png";

export const Header: React.FC = () => {
    return (
        <header className="shadow-float bg-float w-full">
            <div className="flex py-4 px-6 justify-center items-center gap-6">
                <img src={valijitaAppLogo} alt="" className="w-[90px] object-contain object-center" />
            </div>
        </header>
    );
};
