import Navigation from '@/app/components/ui/Navigation';

export default function Page({children} : {children: any}){
    return (
        <div>
            <Navigation>
                {children}
            </Navigation>
        </div>
    );
}