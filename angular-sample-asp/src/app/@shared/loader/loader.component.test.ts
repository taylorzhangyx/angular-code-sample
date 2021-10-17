import * as loader_component from "@app/@shared/loader/loader.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new loader_component.LoaderComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
