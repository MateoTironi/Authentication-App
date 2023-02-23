import { Request, Response } from "express";
import User from "../models/User";


export const getUsuarios = (req: Request, res: Response) =>{

    res.json({
        msg: 'getUsuarios'
    })

}

export const getUsuario = (req: Request, res: Response) =>{

    const {id} = req.params;

    res.json({
        msg: 'getUsuario',
        id
    })

}

export const postUsuario = async (req: Request, res: Response) =>{

    const {name,email} = req.body;

    try {
        const newUser = await User.create({name, email});
        

        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})   
    }

}

export const putUsuario = (req: Request, res: Response) =>{

    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'putUsuario',
        body,
        id
        
    })

}

export const deleteUsuario = (req: Request, res: Response) =>{

    const {id} = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })

}