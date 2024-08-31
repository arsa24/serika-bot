const fs = require("fs")
const path = require("path")

function lib(dir: string) {
    return new Proxy({}, {
        get(target: any, moduleName: string) {
            if(!(moduleName in target)){
                const modulePath: any = path.join(dir, moduleName)
                if(fs.existsSync(`${modulePath}`)){
                    target[moduleName] = require(modulePath)
                }else{
                    throw new Error(`Module ${moduleName} not found`)
                }
            }
            return target[moduleName]
        }
    })
}

// export * from "./check"
// export * from "./filter"
// export * from "./gemini"
// export * from "./getMessage"
// export * from "./progress"
// export * from "./reply"
// export * from "./simulate"
// export * from "./youtube"
// export * from "./y2mate"