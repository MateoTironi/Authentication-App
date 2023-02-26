import { Request, Response } from "express";
import User from "../models/User";


export const getUsuarios = (req: Request, res: Response) => {

    res.json({
        msg: 'getUsuarios'
    })

}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getUsuario',
        id
    })

}

export const postUsuario = async (req: Request, res: Response) => {

    const { fullName, email, alias, img, status, bio, contact } = req.body;

    try {
        const newUser = await User.create({ fullName, email, alias, img, status, bio, contact });

        res.json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error })
    }
}

export const putUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuario',
        body,
        id

    })

}

export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })

}