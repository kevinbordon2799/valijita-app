import valijitaAppLogo from '../../assets/valijita-app-logo.png';

export const Header: React.FC = () => {
    return (
        <div className='flex justify-center mb-[100px] w-full'>
            <header className="fixed w-full z-20 mx-auto border border-gray-200 bg-white shadow-[0px_0px_20px_5px_rgba(110,17,176, 1)] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]">
                <div className="flex py-4 px-6 justify-center items-center gap-6">
                    <img
                        src={valijitaAppLogo}
                        alt=""
                        className="w-[90px] object-contain object-center"
                    />
                </div>
            </header>
        </div>
    );
};
