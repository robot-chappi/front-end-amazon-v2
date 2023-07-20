import { instance } from "@/api/api.interceptor"
import { STATISTICS, TypeStatisticResponse } from "./statistic.types"

export const StatisticService = {
    async getMain() {
        return instance<TypeStatisticResponse[]>(
            {
                url: `${STATISTICS}/main`,
                method: 'GET'
            }
        )
    }
}