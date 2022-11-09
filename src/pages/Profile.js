import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';
import SimpleFooter from 'components/SimpleFooter';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
            </main>
        </>
    );
}
