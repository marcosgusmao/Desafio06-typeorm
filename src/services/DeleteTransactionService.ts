import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TrasnsactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TrasnsactionRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
