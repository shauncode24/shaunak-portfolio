import './Projects.css';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

export default function Projects() {
    return (
        <div className="default projects-container">
            <ScrollStack
                itemDistance={150}
                itemStackDistance={40}
                stackPosition="15%"
                scaleEndPosition="5%"
                baseScale={0.9}
                itemScale={0.02}
            >
                <ScrollStackItem>
                    <h2>Card 1</h2>
                    <p>This is the first card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem>
                    <h2>Card 2</h2>
                    <p>This is the second card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem>
                    <h2>Card 3</h2>
                    <p>This is the third card in the stack</p>
                </ScrollStackItem>
            </ScrollStack>
        </div>
    );
}
