import { Request, Response } from "express";
import { Logger } from "../../services/logs/createLogs";
import { DadosIAUseCase } from "./dadosIAUseCase";

interface IParams {
    response: {
        result?: string | any
        message: string,
        status: number
    }
}

interface IDadosIAController {
    Handle(request: Request, response: Response): Promise<Response<IParams>> | Promise<any>

}


export class DadosIAController implements IDadosIAController {

    constructor(
        private dadosIAUseCase: DadosIAUseCase
    ) { }

    async Handle(request: Request, response: Response): Promise<Response<DadosIAController>> {
        const askedToAI: string = request.body.askedToAI || ''
        const pass: string = request.body.pass || ''

        try {
            if (pass != "x?-re_3k4wrO#*zadEsp+pho+i!lswut_@f!suben2c9u4r$9es2&r666ath_0oysp+pho+i!lswut_x?-re_3k4wrO#*zadEsp+pho+i!lswut_-re_3k4wrO#*zadEsp+pho+i!lswut") { throw `Not authorized` }
            let resultado: IParams = await this.dadosIAUseCase.Execute(askedToAI)
            return response.status(resultado.response.status).json({ response: resultado.response })

        } catch (error) {
            Logger.error("OPENIA: " + error)
            return response.status(401).json({
                response: {
                    message: error,
                    status: 401,
                    result: []
                }
            })
        }

    }

}