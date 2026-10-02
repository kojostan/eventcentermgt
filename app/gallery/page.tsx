import {Shell,PageIntro,CTA} from '../venue';import {Gallery} from './viewer';
export const metadata={title:'Gallery'};
export default function GalleryPage(){return <Shell><PageIntro label="A LITTLE INSPIRATION FOR YOUR BIG MOMENT" title="Gallery" text="From beautifully set tables to warm community gatherings, imagine the possibilities for your occasion."/><section className="section"><Gallery/></section><CTA/></Shell>}
