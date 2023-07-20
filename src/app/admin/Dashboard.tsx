'use client'

import { StatisticService } from '@/services/statistic/statistic.service';
import Heading from '@/ui/Heading';
import Loader from '@/ui/Loader';
import { convertPrice } from '@/utils/convertPrice';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
    const {data, isFetching} = useQuery(['statistics'], () => StatisticService.getMain(), {select: ({data}) => data})
    
    return (
        <>
            <Heading className='mb-8'>Dashboard</Heading>
            {isFetching ? (
                <Loader/>
            ) : data?.length ? (
                <div className={styles.wrapper}>
                    {data.map((item, index) => {
                        return (
                            <div key={item.name} className={styles.item}>
                                <div>{item.name}</div>
                                <div>
                                    {index === data.length - 1 ? convertPrice(item.values || 0) : item.values}
                                </div>
                            </div>
                    )})}
                </div>
            ) : <p>There are no statistics!</p>}
        </>
    );
};

export default Dashboard;