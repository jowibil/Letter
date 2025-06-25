
import { PageHeader } from "./layouts/PageHeader"
import { UpperContainer } from "./layouts/BodyContainer"
// import CodeEditor from "./layouts/Editor"
import { FooterContainer } from "./layouts/Footer"
import TypingCodeBlock from "./layouts/TypingEditor"


export default function App() {
  return (
    <div className="max-h-screen max-w-full" >
      <PageHeader />
      <div className="flex flex-col p-2 mt-20 lg:max-w-5xl m-auto">
        <div>
          <UpperContainer />
        </div>
      </div>
        <div className="flex flex-col mt-40 lg:max-w-5xl m-auto">
          <h1 className="text-center p-2 text-3xl font-bold lg:text-4xl">Code Playground</h1>
        <p className="text-center p-2 m-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil eos nemo dolorem quo voluptatem soluta voluptatibus <br /> ad placeat est iste enim, natus ducimus, minima sit, ex vel accusamus eius? </p>
        <div className="flex items-center justify-center p-4 mt-8">
          <TypingCodeBlock />
        </div>
      </div>
      <footer className="mt-40">
        <FooterContainer />
      </footer>
    </div>
  )

}
